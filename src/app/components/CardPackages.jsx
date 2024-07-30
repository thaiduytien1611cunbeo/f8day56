import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";

const CardPackages = () => {
  return (
    <Card className="py-1">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large text-amber-600">Mumbai</h4>
        <p className="font-bold text-base">
          Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại
        </p>
        <p className="text-tiny">chuyến đi dành cho gia đình 3N/2Đ</p>
        <small className="font-bold text-amber-600">
          30.000.000 <span className="sale">52.845.245</span>
        </small>
      </CardBody>
      <CardFooter>
        <Button color="warning">Đặt ngay</Button>
      </CardFooter>
    </Card>
  );
};

export default CardPackages;
