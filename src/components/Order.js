import moment from "moment";
import Currency from "react-currency-formatter";

const Order = ({ id, amount, amountShipping, items, images, timestamp }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 bg-gray-100 text-xs p-5 text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="USD" /> - Next Day Delivery{" "}
            <Currency quantity={amountShipping} currency="USD" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-48 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img className="h-20 object-contain sm:h-32" src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
