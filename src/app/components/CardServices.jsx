import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import {
  faMoon,
  faSun,
  faHotel,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardServices() {
  return (
    <Card className="py-4 flex flex-columns justify-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col ">
        <FontAwesomeIcon
          icon={faHotel}
          className="fas fa-hotel text-4xl pb-2"
        />
        <h4 className="font-bold text-large">Nghỉ Dưỡng Cao Cấp</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-tiny font-bold text-center">Some text...</p>
      </CardBody>
    </Card>
  );
}
