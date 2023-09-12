"use client";
import ToDoList from "@/components/toDoList/toDoList";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
      <div>
        <ToDoList />
        <ToastContainer />
      </div>
    </main>
  );
}
