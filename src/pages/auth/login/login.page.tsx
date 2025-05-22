import { Link } from "react-router";

import { useLogin } from "./use-login-user";

import { FooterNav } from "@/shared/components/navigation/footer-navigation";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { FormField } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { PageLayout } from "@/shared/ui/page-layout";
import { Separator } from "@/shared/ui/separator";
import { Header } from "@/widgets/header";

const LoginPage = () => {
  const { form, onSubmit, isLoading } = useLogin();

  return (
    <PageLayout
      header={<Header />}
      content={
        <div className="mt-10 flex flex-col items-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                Login
              </CardTitle>
              <CardDescription className="text-center">
                Please enter your email and password to login.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-10 flex-row justify-center gap-4">
                <Button variant="outline">Login with Google</Button>
                <Button variant="outline">Login with GitHub</Button>
              </div>

              <Separator className="my-4" />

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    isLoading={isLoading}
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter>
              <p className="text-muted-foreground text-sm">
                Don't have an account?
                <Link className="text-primary ml-2 underline" to="/signup">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      }
      footer={<FooterNav />}
    />
  );
};

export const Component = LoginPage;
