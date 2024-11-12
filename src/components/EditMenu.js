import { Menu } from "antd";
import { Circle } from "react-feather";

export const EditMenu = (
    <Menu>
        <Menu.Item key="1"><Circle size={13} className="mr-2" /> Takip Et</Menu.Item>
        <Menu.Item key="2"><Circle size={13} className="mr-2" /> Karşılaştırmaya Ekle</Menu.Item>
        <Menu.Item key="3"><Circle size={13} className="mr-2" /> Transfer Et</Menu.Item>
        <Menu.Item key="4"><Circle size={13} className="mr-2" /> Fiyat Karşılaştır</Menu.Item>
    </Menu>
);