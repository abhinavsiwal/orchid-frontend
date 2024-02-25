"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/Layout/Loader";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { callAxios } from "@/utils/axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Box, Modal, Pagination } from "@mui/material";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Rating from "@mui/material/Rating";
import { useAppSelector } from "@/store/redux-hooks";
import moment from "moment";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "12px",
  border: "1px solid #fff",
  p: 2,
  // boxShadow: 24,
  // p: 4,
};

const formSchema = z.object({
  title: z.string().min(3, "Title must be atleast 3 characters"),
  description: z.string().min(10, "Description must be atleast 10 characters"),
});

const Reviews = ({ reviews, service }: any) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<any>(5);
  const [checked, setChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(0);
  const [dataRange, setDataRange] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const [allReviews, setAllReviews] = useState([] as any);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const payload = {
      title: values.title,
      description: values.description,
      rating: rating,
      service: service?._id,
    };

    try {
      setLoading(true);
      const { data } = await callAxios("post", "review/createReview", payload);
      console.log(data);
      setLoading(false);
      setOpen(false);
      setChecked(!checked);
      toast.success(data?.message);
      form.reset();
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  const getAllReviews = async () => {
    try {
      setLoading(true);
      const { data } = await callAxios(
        "get",
        `review/getReviewByService/${service?._id}?page=${page}&limit=3`
      );
      console.log(data);
      setAllReviews(data?.reviews);
      setTotalPages(data?.totalPages);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    if (service?._id) {
      getAllReviews();
    }
  }, [page, service, checked]);

  console.log(rating);

  return (
    <>
      <div className="flex items-center pt-2 bg-stone-50 h-full font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 px-4 py-2 mx-auto max-w-7xl lg:py-2 md:px-6">
          <div className="w-full my-4 flex justify-between items-center">
            <h2 className=" text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
              Recent Reviews
            </h2>
            <button
              className="py-2 px-4 text-white bg-primary rounded spartan"
              onClick={() => {
                if (!user) {
                  toast.error("Please Login to write a review");
                  return;
                }
                setOpen(true);
              }}
            >
              Write a Review
            </button>
          </div>
          {allReviews?.map((review: any) => {
            return (
              <div className="flex flex-wrap py-4 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                <div className="w-full px-4 mb-4 lg:mb-0 md:w-1/4">
                  <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                    {review?.user?.name}
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Joined{" "}
                    {moment(review?.user?.createdAt).format("MMM DD, YYYY")}
                  </p>
                </div>
                <div className="w-full px-4 mb-4 md:w-1/4 lg:mb-0">
                  <Rating name="read-only" value={review?.rating} readOnly   sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#f97215",
                        },
                        "& .MuiRating-iconHover": {
                          color: "#f97200",
                        },
                      }} />
                </div>
                <div className="w-full px-4 md:w-2/5">
                  <h2 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                    {review?.title}
                  </h2>

                  <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                    {review?.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-end">
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": { color: "#f97215" },
                "& .Mui-selected": {
                  backgroundColor: "#f97215",
                  color: "#fff",
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#f97215",
                  color: "#fff",
                  border: "none",
                },
              }}
              onChange={(e, value) => setPage(value)}
            />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Loader loading={loading} />
          <div className="w-full bg-white flex flex-col gap-4 relative p-2 ">
            <div className="absolute rounded-full bg-[#F2F2F2] p-3 w-fit right-0 -top-2 ">
              <img
                src="/assets/icons/cross.svg"
                alt="close"
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="text-center">
              <span className="text-xl font-medium text-orange-600 dark:text-orange-400">
                Write a Review
              </span>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full flex flex-col gap-3">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Title"
                            type="text"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter Description"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="rating"
                      className="text-sm font-medium leading-none"
                    >
                      Rating
                    </label>
                    <Rating
                      name="rating"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                      size="large"
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#f97215",
                        },
                        "& .MuiRating-iconHover": {
                          color: "#f97200",
                        },
                      }}
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Reviews;
