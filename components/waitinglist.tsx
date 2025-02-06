"use client";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";

interface WaitingListProps {
  width: string;
}

export function WaitingList({ width }: WaitingListProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Please enter a valid email");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");

      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/waiting-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      setLoading(false);

      if (res.ok) {
        setMessage("You have been added to the waiting list!");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      setMessage("Something went wrong");
    }
  };

  return (
    <>
      <Form
        className={`${width} flex items-center md:items-start md:flex-row mt-2 md:mt-3.5`}
        onSubmit={handleSubmit}
      >
        <Input
          isRequired
          className="w-full md:w-inherit md:basis-8/12 waiting-list-border max-w-[380px]"
          color="primary"
          errorMessage={emailError}
          isInvalid={!!emailError}
          name="email"
          placeholder="Your Email Address"
          radius="sm"
          type="email"
          value={email}
          variant="bordered"
          onChange={handleChange}
        />
        <Button
          className="text-white bg-black w-[58%] mt-4 md:mt-0 md:w-inherit md:basis-4/12 max-w-[180px]"
          disabled={loading}
          radius="sm"
          type="submit"
        >
          {loading ? "Joining..." : "Join"}
          <span className="md:hidden lg:inline">waiting list</span>
        </Button>
      </Form>
      {message && <p className="w-full mt-2 text-sm">{message}</p>}
    </>
  );
}
