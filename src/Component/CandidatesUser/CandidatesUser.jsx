import React, { useEffect, useRef, useState } from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import { Button, Form, Input, Space } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import ModalComponent from "../ModalComponent/ModalComponent";
import Loading from "../LoadingComponent/Loading";
import {
  DeleteOutline,
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from "../../Component/Message/Message";
import * as UserService from "../../services/UserServices";
import { useQuery } from "react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { getBase64 } from "../../utils";

const CandidateUser = () => {
  const [rowSelected, setRowSelected] = useState("");
  // để hiển thị drawer edit USER
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  // để hiển thị modal DELETE sản phẩm
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  // hiển thị loading update
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  // lấy info user từ redux
  const user = useSelector((state) => state?.user);
  // sort, filter, search
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  // khai báo state của riêng USER details
  const [stateUserDetails, setStateUserDetails] = useState({
    name: "",
    email: "",
    isAdmin: false,
    address: "",
    phone: "",
    avatar: "",
  });

  // sử dụng form
  const [form] = Form.useForm();

  // console.log("RowSelected", rowSelected)
  // mutation update USER lấy các trường data cần để cho api update
  const mutationUpdate = useMutationHooks((data) => {
    // console.log("dataMutation", data)
    const { id, token, ...rests } = data;
    const res = UserService.updateUser(id, token, { ...rests }); // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
    return res;
  });

  // mutation update USER lấy các trường data cần để cho api DELETE
  const mutationDeleted = useMutationHooks((data) => {
    // console.log("dataMutation", data)
    const { id, token } = data;
    const res = UserService.deleteUser(id, token); // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
    return res;
  });

  // func getAllUser
  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    console.log("res", res);
    return res;
  };

  // func lấy dữ liệu chi tiết từ USER
  const fetchGetDetailsUser = async (rowSelected) => {
    const res = await UserService.getDetailsUser(rowSelected);
    // nếu có data thì set giá trị vào form
    if (res?.data) {
      setStateUserDetails({
        name: res?.data?.name,
        email: res?.data?.email,
        isAdmin: res?.data?.isAdmin,
        address: res?.data?.address,
        phone: res?.data?.phone,
        avatar: res?.data?.avatar,
      });
    }
    // console.log("res", res?.data)
    setIsLoadingUpdate(false); //khi thực hiện func xong thì set loading update lại thành false
  };

  // cách khắc phục lỗi khi set state mà không hiển thị dữ liệu ở form
  useEffect(() => {
    form.setFieldsValue(stateUserDetails);
  }, [form, stateUserDetails]);

  // console.log("rowSelected", rowSelected)
  // khắc phục lỗi lần đầu click thì kh hiển thị state, lần thứ hai thì sẽ hiển hị
  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true); // click vào edit thì nếu ... thì set loading update == true
      fetchGetDetailsUser(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);

  // console.log("StateProduct", stateProductDetails)
  //=======================
  const handleDetailsUser = () => {
    setIsOpenDrawer(true); // form khi click vào thì sẽ hiển thị lên
  };

  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  const {
    data: dataDeleted,
    isLoading: isLoadingDeleted,
    isSuccess: isSuccessDeleted,
    isError: isErrorDeleted,
  } = mutationDeleted;

  // console.log("dataUpdated", dataUpdated)
  // khai báo các biến sử dụng useQuery để lấy getAllUsers
  const queryUser = useQuery({ queryKey: ["users"], queryFn: getAllUsers });
  const { isLoading: isLoadingUsers, data: users } = queryUser;
  // render hai biểu tượng delete và edit dành cho USER
  const renderAction = () => {
    return (
      <div>
        <DeleteOutline
          style={{ fontSize: "30px", cursor: "pointer", color: "#EE444D" }}
          onClick={() => setIsModalOpenDelete(true)}
        />
        <EditOutlined
          style={{
            fontSize: "30px",
            marginLeft: "10px",
            cursor: "pointer",
            color: "#50B846",
          }}
          onClick={handleDetailsUser}
        />
      </div>
    );
  };

  // search, sort, filter ==========================================================================
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={`${selectedKeys[0] || ""}`}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  // các thuộc tính của bảng render ra dữ liệu USERS
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      // sort
      // sorter: (a, b) => a.msp.length - b.msp.length,
      // search
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address - b.address,
    },
    {
      title: "Applied",
      dataIndex: "isAdmin",
      // filter
      filters: [
        {
          text: "True",
          value: true,
        },
        {
          text: "False",
          value: false,
        },
      ],
      onFilter: (value, record) => {
        if (value === true) {
          return record.isAdmin === "True";
        } else if (value === false) {
          return record.isAdmin === "False";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  // dữ liệu của tất cả USER khi render
  const dataTable =
    users?.data?.length &&
    users?.data?.map((user) => {
      return {
        ...user,
        key: user._id,
        isAdmin: user.isAdmin ? "True" : "False",
      };
    });

  // console.log("products", products)

  // useEffect sau khi DELETE USER thành công
  useEffect(() => {
    if (isSuccessDeleted && dataDeleted?.status === "OK") {
      message.success();
      handleCancelDelete();
    } else if (isErrorDeleted) {
      message.error();
    }
  }, [isSuccessDeleted]);

  // nhấn huỷ form khi update USER
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateUserDetails({
      name: "",
      email: "",
      isAdmin: false,
      address: "",
      phone: "",
      avatar: "",
    });
    form.resetFields();
  };

  // useEffect sau khi UPDATE USER thành công
  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);

  // nhấn huỷ form khi delete USER
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  // handleDeleteUser dành cho delete USER
  const handleDeleteUser = () => {
    mutationDeleted.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };

  // handleOnChange dành cho USER details
  const handleOnChangeDetails = (e) => {
    // console.log("check", e.target.name, e.target.value)
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  // handleOnChangeAvatar dành cho USER details
  const handleOnChangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateUserDetails({
      ...stateUserDetails,
      avatar: file.preview,
    });
  };

  // console.log("user", user)
  // hàm để thực hiện nhấn button để update USER
  const onUpdateUser = () => {
    //Lỗi update mà vẫn kh cập nhật ở trong dữ liệu
    // mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, stateUserDetails })
    // KHẮC PHỤC
    mutationUpdate.mutate(
      { id: rowSelected, token: user?.access_token, ...stateUserDetails },
      // sau khi update xong thì reload lại mới có data => đoạn code dưới kh cần reload vẫn có data
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };
  return (
    <div>
      <div
        style={{
          margin: "30px 20px",
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        <WrapperHeader
          style={{
            color: "#00579B",
            fontWeight: "500",
            fontSize: "2rem",
            marginTop: "5rem",
          }}
        >
          CANDIDATE MANAGEMENT
        </WrapperHeader>
        {/* component hiển thị dữ liệu USER */}
        <div style={{ marginTop: "40px" }}>
          <TableComponent
            columns={columns}
            isLoading={isLoadingUsers}
            data={dataTable}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setRowSelected(record._id);
                },
              };
            }}
          />
        </div>
      </div>

      {/* component khi edit USER*/}
      <DrawerComponent
        title="Thông tin ứng viên"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="60%"
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            onFinish={onUpdateUser}
            autoComplete="on"
            form={form}
          >
            {/* name */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                value={stateUserDetails.name}
                onChange={handleOnChangeDetails}
                name="name"
              />
            </Form.Item>
            {/* email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                value={stateUserDetails.email}
                onChange={handleOnChangeDetails}
                name="email"
              />
            </Form.Item>
            {/* Address */}
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your Address!" },
              ]}
            >
              <Input
                value={stateUserDetails.address}
                onChange={handleOnChangeDetails}
                name="address"
              />
            </Form.Item>
            {/* Phone */}
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input your Phone!" }]}
            >
              <Input
                value={stateUserDetails.phone}
                onChange={handleOnChangeDetails}
                name="phone"
              />
            </Form.Item>
            {/* Avatar */}
            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[{ required: true, message: "Please input your avatar!" }]}
            >
              <WrapperUploadFile
                onChange={handleOnChangeAvatarDetails}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Select File</Button>
                {stateUserDetails?.avatar && (
                  <img
                    src={stateUserDetails?.avatar}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: "20px",
                    }}
                    alt="avatar"
                  />
                )}
              </WrapperUploadFile>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>

      {/* component khi xac nhan delete USER */}
      <ModalComponent
        forceRender
        title="Xoá người dùng"
        open={isModalOpenDelete}
        onCancel={handleCancelDelete}
        onOk={handleDeleteUser}
      >
        <Loading isLoading={isLoadingDeleted}>
          <div>Bạn muốn xoá tài thông tin ứng viên này không?</div>
        </Loading>
      </ModalComponent>
    </div>
  );
};

export default CandidateUser;
