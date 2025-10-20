import { AppWindowIcon, CodeIcon, Dot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"

const DeleveryPolicy_Terms = () => {
    return (
      <div className="flex w-full px-5 flex-col gap-6 mt-10">
        <Tabs defaultValue="DELEVERYPOLICY">
          <TabsList>
            <TabsTrigger value="DELEVERYPOLICY" className="rounded-sm">DELEVERY POLICY</TabsTrigger>
            <TabsTrigger value="RETURN&REFUNDPOLICY" className="rounded-sm">RETURN & REFUND POLICY</TabsTrigger>
            <TabsTrigger value="EXCHANGE&COMPLAIN" className="rounded-sm">EXCHANGE & COMPLAIN</TabsTrigger>
          </TabsList>

          <TabsContent value="DELEVERYPOLICY">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>DELEVERY POLICY</CardTitle>
                <CardDescription className="text-base text-black">
                  Delivery Charge:
                  <br />
                  Delivery charge will be 60 BDT inside of Dhaka city and outside of Dhaka city 100 BDT.
                </CardDescription>

                <CardTitle className="mt-5">Inside Dhaka:</CardTitle>
                <CardContent className="text-base text-black leading-relaxed">
                <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
                 <li>Customers are required to inspect the products (color, size, quality, and quantity) in front of the delivery agent during delivery. No complaints will be accepted after the product is delivered. Customers may request a change in product, provided the item has not been used. However, a delivery charge will be applied for each exchange.</li>
                 <li>In case of a change of mind, customers can return the product instantly in front of the delivery agent during delivery and must pay the delivery charge.</li>
                 <li>Delivery time is typically 1-3 days.</li>
                 <li>Return/exchange will be applicable as per our replacements policy.</li>
                 <li>We reserve the right to change our policies at any time.</li>
                </ul>
                </CardContent>

                <CardTitle className="mt-5">Outside Dhaka:</CardTitle>
                <CardContent className="text-base text-black leading-relaxed">
                <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
                 <li>Customers are required to inspect the products (color, size, quality, and quantity) in front of the delivery agent during delivery. No complaints will be accepted after the product is delivered.</li>
                 <li>Similar to the inside Dhaka policy, customers may request a change in product with applicable delivery charges.</li>
                 <li>Delivery time is typically 2-5 working days.</li>
                 <li>Return/exchange will be applicable as per our exchange/refund policy.</li>
                 <li>We reserve the right to change our policies at any time.</li>
                </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
          
          <TabsContent value="RETURN&REFUNDPOLICY">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>RETURN & REFUND POLICY</CardTitle>
                <CardDescription className="text-base text-black">
                  At RICHKID, we want you to be happy with your purchases. If you&apos;re not satisfied, don&apos;t worry! Here&apos;s what you need to know about refunds and returns:
                  <br /> <br />
                  1. If your product is defective/damaged or incorrect/incomplete at the time of delivery, please contact us within the applicable return window of 48 hours. Your product may be eligible for a refund or replacement depending on the product category and condition.
                 <br />
                  2. Please note that products are not eligible for a return if the customer has a change of mind.
                 <br />
                  3. You will always find the relevant terms and conditions on the product page.
                </CardDescription>

                <CardTitle className="mt-5">VALID REASONS TO RETURN AN ITEM</CardTitle>
                <CardDescription className="text-base text-black">
                1. Delivered Product is damaged (physically destroyed or broken) / defective.
                <br />
                2. Delivered Product is incorrect (presentation / specification different from website) / incomplete (missing parts).
                <br />
                3. The size of a product does not match with the one ordered.
                </CardDescription>

                <CardTitle className="mt-5"> TERMS & CONDITIONS TO RETURN A PRODUCT</CardTitle>
                <CardDescription className="text-base text-black">
                1. The product must be unused, unworn, and unwashed.
                <br />
                2. The product must include the original tags, user manual, warranty cards, freebies, and accessories.
                <br />
                3. The product must be returned in the original and undamaged manufacturer packaging/box.
                </CardDescription>

                <CardTitle className="mt-5">ISSUANCE OF REFUNDS</CardTitle>
                <CardDescription className="text-base text-black">
                 If your product is eligible for a refund, you can choose to refund via exchange courier. Once we have received your product (2-3 working days after the customer has initiated return delivery) and it has undergone quality control (1-2 working days), the expected refund processing window is 7 working days.
                 <br /> <br />
                 Sometimes due to unwanted issues and transportation delays, the refund process may take a bit longer than the expected window.
                 <br /> <br />
                 That&apos;s it! We hope you enjoy shopping with RICHKID!
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          
          <TabsContent value="EXCHANGE&COMPLAIN">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Exchange</CardTitle>
                <CardContent className="text-base text-black leading-relaxed">
                <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
                 <li> Exchange is applicable only for size issue & for our mistakes or if we sent damaged products. </li>
                 <li> Exchange is only valid from 3 days from the product received date. </li>
                 <li> Customer need to provide products short video of product that need to exchange through our whatsapp (+8801324250470), <b>Note:</b> Please mention your order ID with the video. </li>
                 <li> Customer need to bear the delivery cost if there is no issue from our end. </li>
                </ul>
                </CardContent>

                <CardTitle className="mt-10">Complain</CardTitle>
                <CardContent className="text-base text-black leading-relaxed">
                <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
                 <li>To get quick response please call at our support number +8801324250*** </li>
                 <li>Customer can submit their complain through our whatsapp- +8801324250***</li>
                 <li>Or can contact us in our facebook page inbox.</li>
                </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
};

export default DeleveryPolicy_Terms;