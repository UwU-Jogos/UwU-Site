import { useState } from "react";

export default function Subscribe() {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		try {
            await fetch("http://localhost:8080/mail", {
			method: "POST",
			body: JSON.stringify({ email_address: email, status: "subscribed" }),
		});
        } catch (error) {
           alert(error); 
        }
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button type="submit">Subscribe</button>
		</form>
	);
}
