"use client";
import { Form, Input, Button } from "@heroui/react";
interface WatingListProps {
  width: string;
}

export function WatingList({ width }: WatingListProps) {
  return (
    <Form
      className={`${width} flex items-center md:flex-row mt-2 md:mt-3.5`}
      validationBehavior="native"
      // onSubmit={onSubmit}
    >
      <Input
        isRequired
        className="w-full md:w-inhert md:basis-8/12 waiting-list-border max-w-[380px]"
        color="primary"
        errorMessage="Please enter a valid email"
        fullWidth={false}
        name="email"
        placeholder="You Email Address"
        radius="sm"
        type="email"
        variant="bordered"
      />
      <Button
        className="text-white bg-black w-[58%] mt-4 md:mt-0 md:w-inhert md:basis-4/12 max-w-[180px]"
        fullWidth={false}
        radius="sm"
        type="submit"
      >
        Join
        <span className="md:hidden lg:inline">waiting list</span>
      </Button>
      {/* {submitted && (
              <div className="text-small text-default-500">
                You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
            )} */}
    </Form>
  );
}
