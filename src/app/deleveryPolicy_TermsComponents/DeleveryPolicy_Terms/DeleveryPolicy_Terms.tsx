import { AppWindowIcon, CodeIcon, Dot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import DeleveryPolicy from "../DeleveryPolicy/DeleveryPolicy"
import Return_RefundPolicy from "../Return_RefundPolicy/Return_RefundPolicy"
import Exchange_Complain from "../Exchange_Complain/Exchange_Complain"

const DeleveryPolicy_Terms = () => {
    return (
      <div className="flex w-full px-2 md:px-5 flex-col gap-6 mt-5 md:mt-10">
        <Tabs defaultValue="DELEVERYPOLICY">
          <TabsList className="flex flex-col md:flex-row h-fit items-start md:items-center">
            <TabsTrigger value="DELEVERYPOLICY" className="rounded-sm">DELEVERY POLICY</TabsTrigger>
            <TabsTrigger value="RETURN&REFUNDPOLICY" className="rounded-sm">RETURN & REFUND POLICY</TabsTrigger>
            <TabsTrigger value="EXCHANGE&COMPLAIN" className="rounded-sm">EXCHANGE & COMPLAIN</TabsTrigger>
          </TabsList>

          <TabsContent value="DELEVERYPOLICY">
            <DeleveryPolicy/>
          </TabsContent>
          
          <TabsContent value="RETURN&REFUNDPOLICY">
            <Return_RefundPolicy/>
          </TabsContent>
          
          <TabsContent value="EXCHANGE&COMPLAIN">
            <Exchange_Complain/>
          </TabsContent>
        </Tabs>
      </div>
    );
};

export default DeleveryPolicy_Terms;