import React from "react";
interface ListProps<T> {
  class?: string;
  items: T[];
  renderItem: (item: T, index?: number) => React.ReactNode | React.ReactElement;
}
export default function List<T>(props: ListProps<T>) {
  return (
    <div className={`items ${props.class}`}>
      {props.items.map(props.renderItem)}
    </div>
  );
}
