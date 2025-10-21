import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

const DeleveryPolicy = () => {
    return (
      <Card className="rounded-none shadow-none">
        <CardHeader>
          <CardTitle>DELEVERY POLICY</CardTitle>
          <CardDescription className="text-base text-black">
            Delivery Charge:
            <br />
            Delivery charge will be 60 BDT inside of Dhaka city and outside of
            Dhaka city 100 BDT.
          </CardDescription>

          <CardTitle className="mt-5">Inside Dhaka:</CardTitle>
          <CardContent className="text-base text-black leading-relaxed">
            <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
              <li>
                Customers are required to inspect the products (color, size,
                quality, and quantity) in front of the delivery agent during
                delivery. No complaints will be accepted after the product is
                delivered. Customers may request a change in product, provided
                the item has not been used. However, a delivery charge will be
                applied for each exchange.
              </li>
              <li>
                In case of a change of mind, customers can return the product
                instantly in front of the delivery agent during delivery and
                must pay the delivery charge.
              </li>
              <li>Delivery time is typically 1-3 days.</li>
              <li>
                Return/exchange will be applicable as per our replacements
                policy.
              </li>
              <li>We reserve the right to change our policies at any time.</li>
            </ul>
          </CardContent>

          <CardTitle className="mt-5">Outside Dhaka:</CardTitle>
          <CardContent className="text-base text-black leading-relaxed">
            <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
              <li>
                Customers are required to inspect the products (color, size,
                quality, and quantity) in front of the delivery agent during
                delivery. No complaints will be accepted after the product is
                delivered.
              </li>
              <li>
                Similar to the inside Dhaka policy, customers may request a
                change in product with applicable delivery charges.
              </li>
              <li>Delivery time is typically 2-5 working days.</li>
              <li>
                Return/exchange will be applicable as per our exchange/refund
                policy.
              </li>
              <li>We reserve the right to change our policies at any time.</li>
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
    );
};

export default DeleveryPolicy;