import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { useAppSelector } from "@/store/redux-hooks";
import axios from "axios";
import Loading from "react-fullscreen-loading";
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";


const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be atleast 3 characters long")
    .max(50, "Name must be less than 50 characters long"),
  phone: z.string().refine(
    (phoneNumber) => {
      const phonePattern = /^(\d{10}|\d{4}[-\s]?\d{3}[-\s]?\d{3})$/;
      return phonePattern.test(phoneNumber.toString());
    },
    {
      message: "Please enter a valid phone number",
    }
  ),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be atleast 10 characters long"),
  // city: z.string().min(3, "City must be atleast 3 characters long"),
  service: z.string().min(3, "Please select a service"),
});

const Contact = () => {
  const { address } = useAppSelector((state) => state.location);
  console.log(address);

  const { services } = useAppSelector((state) => state.services);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
      message: "",
      service: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = { ...values, address };
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.backendUrl}/contact/createContact`,
        payload
      );
      console.log(data);
      toast.success("Form Submitted Successfully, Will reach you soon");
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  }

  return (
    <Dialog>
      {/* <Loading loading={loading} background="#fff" loaderColor="#5046E5" /> */}
      <DialogTrigger asChild>
        <Button variant="secondary" className="md:w-fit w-full">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl inter font-semibold ">
            Contact Us
          </DialogTitle>
        </DialogHeader>
        {loading ? (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <CircularProgress color="primary" />
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 .flex w-full flex-col"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Phone"
                        type="number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
       control={form.control}
       name="city"
       render={({ field }) => (
         <FormItem>
           <FormLabel>City*</FormLabel>
           <FormControl>
             <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
               <SelectTrigger className="w-full">
                 <SelectValue placeholder="Select your City" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="Delhi">Delhi</SelectItem>
                 <SelectItem value="Mumbai">Mumbai</SelectItem>
                 <SelectItem value="Gurgaon">Gurgaon</SelectItem>
                 <SelectItem value="Noida">Noida</SelectItem>
               </SelectContent>
             </Select>
           </FormControl> 
           
           <FormMessage />
         </FormItem>
       )}  
     /> */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service*</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        {...field}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services?.map((service) => {
                            return (
                              <SelectItem value={service?._id}>
                                {service?.name}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message*</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter Your Message" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
