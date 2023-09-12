import styled from "styled-components";

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  width: 500px;
   @media (max-width: 480px) {
    width: 50vh;
  }
  cursor: pointer;
  &.completed {
    text-decoration: line-through;
  }
`;

export const TaskInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  width: 400px;
  @media (max-width: 480px) {
    width: 30vh;
  }
   
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const TaskCheckbox = styled.input`
  margin-right: 40px;
   @media (max-width: 480px) {
    margin-left: 30px;
    margin-right: 10px;
  }
`;

export const RemoveButton = styled.button`
  background-color: #ff3333;
  color: #fff;
  border: none;
  border-radius: 4px;
   @media (max-width: 480px) {
    margin-right: 30px;
  }
  cursor: pointer;
  display: ${(props) => (props.completed ? "none" : "block")};
  background-color: #f44336;
  &:hover {
    background-color: #d32f2f;
  }
`;

export const FilterButton = styled.button`
  margin-right: 8px;
  padding: 8px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #e0e0e0;
  &:hover {
    background-color: #bdbdbd;
  }
`;
