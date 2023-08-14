"use client"

import Image from "next/image"
import titleImage from "@/public/images/title-donate.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const configData = {
  promoteCaption: `“Mỗi ủng hộ là góp chung tay cho một mùa Pubstomp đàng hoàng hơn, to đẹp hơn”`,
}

const formSchema = z.object({
  name: z.string(),
  amount: z.number().min(1000, "Tối thiểu 1,000 VNĐ"),
  message: z.string(),
})

type DonateForm = z.infer<typeof formSchema>

export default function DonatePage() {
  const form = useForm<DonateForm>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: DonateForm) => {
    console.log(values)
  }

  return (
    <section className="flex flex-col items-center">
      <Image
        src={titleImage.src}
        width={titleImage.width}
        height={titleImage.height}
        className="translate-y-16"
        alt="Pubstomp Donate"
      />
      <div className=" w-[min(100%,700px)] rounded-3xl border border-solid border-[#778CAC] bg-[#1C2039] p-12 shadow-[4px_4px_250px_0px_#2D4266_inset,0px_0px_90px_0px_#448fc3]">
        <span className="flex items-center justify-center rounded-[24px] bg-[rgba(255,255,255,0.05)] px-[16px] py-[23px] text-center font-sans text-xl text-[#B2A78A]">{configData.promoteCaption}</span>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans text-lg font-semibold text-[#A9BCDA]">Họ và tên</FormLabel>
                  <FormControl>
                    <Input className="h-14 rounded-md bg-[rgba(50,71,107,0.50)] text-lg text-white" placeholder="Tên hiển thị" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans text-lg font-semibold text-[#A9BCDA]">Lời nhắn</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  )
}
