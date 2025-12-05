import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {3
  return (
    <div className="max-w-4xl mx-auto bg-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Touch Here </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
               Here is my contact information please feel free to reach out and visit friendly.
             </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> jbalobalo@ncf.edu.ph</p>
                <p><strong>Phone no#:</strong> 09519007927 </p>
                <p><strong>Location:</strong> Calabanga, Philippines</p>
                <p><strong>GitHub:</strong> github.com/james-student</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}