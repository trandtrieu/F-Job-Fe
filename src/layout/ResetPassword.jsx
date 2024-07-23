import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { id, token } = useParams();

  // axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3005/api/user/reset-password/${id}/${token}`,
        { password }
      );
      if (res.data.Status === "Success") {
        toast.success("Reset password successfully");
        history.push("/login");
      }
    } catch (err) {
      toast.error("Failed to reset password");
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
