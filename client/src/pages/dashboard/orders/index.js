import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";
import BrandOrder from "../../../components/dashboard/order/brand-order";
import CreatorOrder from "../../../components/dashboard/order/creator-order";
import { useAuth } from "../../../hooks/use-auth";

const OrderList = () => {
  const { user } = useAuth();

  return (
    <>
      {user?.userData?.userType === "brand" ? <BrandOrder /> : <CreatorOrder />}
    </>
  );
};

OrderList.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default OrderList;
