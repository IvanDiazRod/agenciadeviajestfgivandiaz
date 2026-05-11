import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    surname: "",
    secondsurname: "",
    email: "",
    dateofbirth: "",
    gender: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    match: false,
  });

  useEffect(() => {
    setPasswordCriteria({
      length: form.password.length >= 8,
      uppercase: /[A-Z]/.test(form.password),
      number: /[0-9]/.test(form.password),
      match: form.password === form.password_confirmation && form.password !== "",
    });
  }, [form.password, form.password_confirmation]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", form);
      setSuccess(true);
      setErrors({});
      navigate("/login", { replace: true });
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data.errors || {});
      }
    }
  };

  const ValidationItem = ({ isMet, text }) => (
    <div className={`flex items-center gap-2 text-sm transition-colors duration-300 ${isMet ? "text-green-600" : "text-gray-400"}`}>
      <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${isMet ? "bg-green-100 border-green-500" : "bg-gray-50 border-gray-300"}`}>
        {isMet && <span className="text-[10px]">X</span>}
      </div>
      {text}
    </div>
  );

  return (
      <section className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <form className="w-full flex flex-col gap-6 p-8 border-2 border-blue-600 rounded-3xl shadow-xl bg-white" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold text-center text-gray-800">Create your account</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">First name <span className="text-red-500">*</span></label>
                    <input className="p-2 border-2 border-blue-500 outline-none rounded-xl focus:border-blue-700" type="text" name="firstname" placeholder="Write your first name" value={form.firstname} onChange={handleChange} required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">Surname <span className="text-red-500">*</span></label>
                    <input className="p-2 border-2 border-blue-500 outline-none rounded-xl focus:border-blue-700" type="text" name="surname" placeholder="Write your surname" value={form.surname} onChange={handleChange} required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">Second surname</label>
                    <input className="p-2 border-2 border-blue-500 outline-none rounded-xl focus:border-blue-700" type="text" name="secondsurname" placeholder="Write your second surname" value={form.secondsurname} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">Email <span className="text-red-500">*</span></label>
                    <input className="p-2 border-2 border-blue-500 outline-none rounded-xl focus:border-blue-700" type="email" name="email" placeholder="Write your email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">Date of birth <span className="text-red-500">*</span></label>
                    <input className="p-2 border-2 border-blue-500 outline-none rounded-xl focus:border-blue-700" type="date" name="dateofbirth" value={form.dateofbirth} onChange={handleChange} required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">Gender <span className="text-red-500">*</span></label>
                    <select className="p-2 border-2 border-blue-500 outline-none rounded-xl focus:border-blue-700" name="gender" value={form.gender} onChange={handleChange} required>
                      <option value="" disabled>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="iprefernotsayit">I prefer not to say it</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-sm">Password <span className="text-red-500">*</span></label>
              <input className={`p-2 border-2 outline-none rounded-xl transition-colors ${passwordCriteria.length && passwordCriteria.uppercase && passwordCriteria.number ? 'border-green-500' : 'border-blue-500'}`} type="password" name="password" value={form.password} onChange={handleChange} placeholder="••••••••" required />
              <div className="mt-2 p-4 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col gap-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Security Requirements</p>
                <ValidationItem isMet={passwordCriteria.length} text="At least 8 characters" />
                <ValidationItem isMet={passwordCriteria.uppercase} text="At least one uppercase letter" />
                <ValidationItem isMet={passwordCriteria.number} text="At least one number" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-sm">Confirm password <span className="text-red-500">*</span></label>
              <input className={`p-2 border-2 outline-none rounded-xl ${passwordCriteria.match ? 'border-green-500' : 'border-blue-500'}`} type="password" name="password_confirmation" value={form.password_confirmation} onChange={handleChange} placeholder="••••••••" required />
              {form.password_confirmation && (<p className={`text-xs font-medium ${passwordCriteria.match ? "text-green-600" : "text-red-500"}`}>{passwordCriteria.match ? "Passwords match!" : "Passwords do not match yet"}</p>)}
            </div>

            <button type="submit" disabled={!(passwordCriteria.length && passwordCriteria.uppercase && passwordCriteria.number && passwordCriteria.match)} className="w-full bg-blue-600 disabled:bg-gray-400 text-white px-4 py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition shadow-md cursor-pointer">Create my account</button>
            <p className="text-center text-gray-500 text-sm">Already have an account? <Link to="/login" className="text-blue-600 hover:underline font-medium">Log in</Link></p>
          
          </form>
        </div>
      </section>
  );
}