import styled from "styled-components";

type TaskProps = {
  selected?: boolean;
};

export const StyledTaskEntryWrapper = styled.article<TaskProps>`
  background: ${(taskprops) =>
    taskprops.selected ? "rgba(0, 82, 204, 0.1)" : "#ffffff"};
  border: 1px solid
    ${(taskprops) =>
      taskprops.selected
        ? "rgba(0, 82, 204, 0.4)"
        : "rgba(136, 136, 136, 0.4)"};
  border-radius: 5px;
  padding: 8px 12px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${(taskprops) => (taskprops.selected ? "#0052CC" : "#1c1c1c")};
    margin: 0;
  }
`;
