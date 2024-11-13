import Address from "@/entities/Address";

const extractAddress = (address: Address) => {
  return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
};

export default extractAddress;
