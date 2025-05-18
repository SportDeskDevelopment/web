import { Layout } from "@/shared/components/navigation/layout";
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
import { Separator } from "@/shared/ui/separator";
import { Link } from "react-router";
import { useLogin } from "./use-login-user";

export const LoginPage = () => {
  const { form, onSubmit } = useLogin();

  return (
    <Layout withoutFooter>
      <div className="flex flex-col items-center mt-10">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
            <CardDescription className="text-center">
              Please enter your email and password to login.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-4 justify-center h-10">
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
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Don't have an account?
              <Link className="text-primary underline ml-2" to="/signup">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};
