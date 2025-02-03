"use client";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";

interface WatingListProps {
  width: string;
}

export function WatingList({ width }: WatingListProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

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
  };

  return (
    <>
      <Form
        className={`${width} flex items-center md:flex-row mt-2 md:mt-3.5`}
        onSubmit={handleSubmit}
      >
        <Input
          isRequired
          className="w-full md:w-inherit md:basis-8/12 waiting-list-border max-w-[380px]"
          color="primary"
          errorMessage="Please enter a valid email"
          fullWidth={false}
          name="email"
          placeholder="Your Email Address"
          radius="sm"
          type="email"
          value={email}
          variant="bordered"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="text-white bg-black w-[58%] mt-4 md:mt-0 md:w-inherit md:basis-4/12 max-w-[180px]"
          disabled={loading}
          fullWidth={false}
          radius="sm"
          type="submit"
        >
          {loading ? "Joining..." : "Join"}
          <span className="md:hidden lg:inline"> waiting list</span>
        </Button>
      </Form>
      <div className="w-full">
        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>
    </>
  );
}
