/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RDG3pBq85ld
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
//@ts-nocheck
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// export default function ContactUs() {
export const ContactUs = () => {
    return (
        // <main className="space-y-8">
        <section id="contact_us" className="container py-24 sm:py-32">
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    Contact Us
                </h2>
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                Feel free to leave any enquiries below.
                </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">

                <div className="space-y-4">
                    <Card>
                        <CardContent className="space-y-2 py-4">
                            <h3 className="text-xl font-bold">Contact Information</h3>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <MapPinIcon className="w-4 h-4" />
                                    <span>1234 Street Name, City, State, 56789</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="w-4 h-4" />
                                    <span>(123) 456-7890</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MailboxIcon className="w-4 h-4" />
                                    <Link href="#" prefetch={false}>
                                        info@example.com
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold">Send us a Message</h2>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" type="email" />
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                        </CardContent>
                        <CardFooter>
                            <Button>Submit</Button>
                        </CardFooter>
                    </Card>
                    </div>
                {/* </main> */}
            </div>
        </section>
    )
}

function MailboxIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
            <polyline points="15,9 18,9 18,11" />
            <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
            <line x1="6" x2="7" y1="10" y2="10" />
        </svg>
    )
}


function MapPinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}


function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}