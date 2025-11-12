import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"

const Return_RefundPolicy = () => {
    return (
      <Card className="rounded-none shadow-none">
        <CardHeader>
          <CardTitle>RETURN & REFUND POLICY</CardTitle>
          <CardDescription className="text-base text-black">
            At HappyShop, we want you to be happy with your purchases. If
            you&apos;re not satisfied, don&apos;t worry! Here&apos;s what you
            need to know about refunds and returns:
            <br /> <br />
            1. If your product is defective/damaged or incorrect/incomplete at
            the time of delivery, please contact us within the applicable return
            window of 48 hours. Your product may be eligible for a refund or
            replacement depending on the product category and condition.
            <br />
            2. Please note that products are not eligible for a return if the
            customer has a change of mind.
            <br />
            3. You will always find the relevant terms and conditions on the
            product page.
          </CardDescription>

          <CardTitle className="mt-5">
            VALID REASONS TO RETURN AN ITEM
          </CardTitle>
          <CardDescription className="text-base text-black">
            1. Delivered Product is damaged (physically destroyed or broken) /
            defective.
            <br />
            2. Delivered Product is incorrect (presentation / specification
            different from website) / incomplete (missing parts).
            <br />
            3. The size of a product does not match with the one ordered.
          </CardDescription>

          <CardTitle className="mt-5">
            {" "}
            TERMS & CONDITIONS TO RETURN A PRODUCT
          </CardTitle>
          <CardDescription className="text-base text-black">
            1. The product must be unused, unworn, and unwashed.
            <br />
            2. The product must include the original tags, user manual, warranty
            cards, freebies, and accessories.
            <br />
            3. The product must be returned in the original and undamaged
            manufacturer packaging/box.
          </CardDescription>

          <CardTitle className="mt-5">ISSUANCE OF REFUNDS</CardTitle>
          <CardDescription className="text-base text-black">
            If your product is eligible for a refund, you can choose to refund
            via exchange courier. Once we have received your product (2-3
            working days after the customer has initiated return delivery) and
            it has undergone quality control (1-2 working days), the expected
            refund processing window is 7 working days.
            <br /> <br />
            Sometimes due to unwanted issues and transportation delays, the
            refund process may take a bit longer than the expected window.
            <br /> <br />
            That&apos;s it! We hope you enjoy shopping with HappyShop!
          </CardDescription>
        </CardHeader>
      </Card>
    );
};

export default Return_RefundPolicy;