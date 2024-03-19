"use client";
import { useState } from "react";

function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState({});

	const validateForm = () => {
		let valid = true;
		const newError = {};

		if (!name.trim()) {
			newError.name = "Name is required";
			valid = false;
		}

		if (!email.trim()) {
			newError.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newError.email = "Invalid email address";
			valid = false;
		}

		if (!phone.trim()) {
			newError.name = "Phone is required";
			valid = false;
		}

		setError(newError);
		return valid;
	};

	const handleSend = (e) => {
		e.preventDefault();

		if (validateForm()) {
			console.log("Form data:", { name, email, phone });
		} else {
			console.log("Form validation failed");
		}
	};

	return (
		<form onSubmit={handleSend}>
			<div className='row'>
				<div className='col-md-6'>
					<div className='form-grp'>
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							type='text'
							placeholder='Name *'
						/>
						{error.name && <div className='error-message'>{error.name}</div>}
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form-grp'>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type='email'
							placeholder='E-mail *'
						/>
						{error.email && <div className='error-message'>{error.email}</div>}
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form-grp'>
						<input
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							type='number'
							placeholder='Phone *'
						/>
						{error.phone && <div className='error-message'>{error.phone}</div>}
					</div>
				</div>
				<div className='col-md-6'>
					<button type='submit' className='btn'>
						Send Now
					</button>
				</div>
			</div>
		</form>
	);
}

export default Form;
