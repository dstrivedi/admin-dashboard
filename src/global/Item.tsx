import { Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

type ItemType = {
  title: string;
  to: string;
  icon: React.ReactElement;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  colors: any;
};

const Item = ({ title, to, icon, selected, setSelected, colors }: ItemType) => {
  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      onClick={() => setSelected(title)}
      style={{ color: colors.grey[100] }}
    >
      <Link to={to}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

export default Item;
