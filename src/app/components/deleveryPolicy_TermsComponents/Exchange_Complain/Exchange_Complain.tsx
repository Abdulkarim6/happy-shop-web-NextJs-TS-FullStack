import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

const Exchange_Complain = () => {
    return (
      <Card className="rounded-none shadow-none">
        <CardHeader>
          <CardTitle>Exchange</CardTitle>
          <CardContent className="text-base text-black leading-relaxed">
            <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
              <li>
                {" "}
                Exchange is applicable only for size issue & for our mistakes or
                if we sent damaged products.{" "}
              </li>
              <li>
                {" "}
                Exchange is only valid from 3 days from the product received
                date.{" "}
              </li>
              <li>
                {" "}
                Customer need to provide products short video of product that
                need to exchange through our whatsapp (+8801324250470),{" "}
                <b>Note:</b> Please mention your order ID with the video.{" "}
              </li>
              <li>
                {" "}
                Customer need to bear the delivery cost if there is no issue
                from our end.{" "}
              </li>
            </ul>
          </CardContent>

          <CardTitle className="mt-10">Complain</CardTitle>
          <CardContent className="text-base text-black leading-relaxed">
            <ul className="list-disc space-y-2 marker:text-lg marker:text-black">
              <li>
                To get quick response please call at our support number
                +8801324250***{" "}
              </li>
              <li>
                Customer can submit their complain through our whatsapp-
                +8801324250***
              </li>
              <li>Or can contact us in our facebook page inbox.</li>
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
    );
};

export default Exchange_Complain;