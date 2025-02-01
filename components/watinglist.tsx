"use client";
import { Form, Input, Button } from "@heroui/react";
export function WatingList() {
  return (
    <Form
      className="w-4/5 flex flex-row mt-3.5"
      validationBehavior="native"
      // onSubmit={onSubmit}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        name="email"
        placeholder="You Email Address"
        type="email"
        fullWidth={false}
        variant="bordered"
        radius="sm"
        className="basis-8/12"
      />
      <Button
        type="submit"
        fullWidth={false}
        radius="sm"
        className="basis-4/12 bg-black text-white"
      >
        Join waiting list
      </Button>
      {/* {submitted && (
              <div className="text-small text-default-500">
                You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
            )} */}
    </Form>
  );
}
