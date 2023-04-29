import React, {FC} from 'react';
import { ListContainer, ListItem, Empty } from "./_styles";

const List: FC<{
  items: string[];
}> = ({ items }) => {
  if (!items.length) {
    return <Empty>Nothing found</Empty>;
  }

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={item + index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

export default List;
