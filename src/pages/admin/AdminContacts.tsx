import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  FolderOpen,
  MessageSquare,
  LogOut,
  Eye,
  Trash2,
  ArrowLeft,
  Mail,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  date: string;
  status: "unread" | "read" | "replied";
}

const mockContacts: ContactSubmission[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234 567 890",
    company: "TechCorp",
    message: "I'm interested in your digital marketing services. Can we schedule a call?",
    date: "2024-01-15 10:30",
    status: "unread",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@company.com",
    phone: "+1 987 654 321",
    company: "StartupXYZ",
    message: "Looking for web development services for our new project.",
    date: "2024-01-14 15:45",
    status: "read",
  },
  {
    id: "3",
    name: "Mike Wilson",
    email: "mike@business.com",
    phone: "+1 555 123 456",
    company: "Enterprise Inc",
    message: "Need a consultation for our digital transformation strategy.",
    date: "2024-01-13 09:15",
    status: "replied",
  },
];

const AdminContacts = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>(mockContacts);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleView = (contact: ContactSubmission) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
    
    // Mark as read
    if (contact.status === "unread") {
      setContacts(contacts.map(c => 
        c.id === contact.id ? { ...c, status: "read" } : c
      ));
    }
  };

  const handleDelete = async (id: string) => {
    // TODO: Replace with actual Hostinger API call
    setContacts(contacts.filter(c => c.id !== id));
    toast.success("Contact deleted!");
  };

  const handleMarkReplied = (id: string) => {
    setContacts(contacts.map(c => 
      c.id === id ? { ...c, status: "replied" } : c
    ));
    toast.success("Marked as replied!");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: FileText, label: "Blog Posts", path: "/admin/blogs" },
    { icon: Briefcase, label: "Services", path: "/admin/services" },
    { icon: FolderOpen, label: "Case Studies", path: "/admin/case-studies" },
    { icon: MessageSquare, label: "Contact Submissions", path: "/admin/contacts" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-blue-100 text-blue-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "replied":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r flex flex-col">
        <div className="p-4 border-b">
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        <nav className="flex-1 p-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                item.path === "/admin/contacts"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-2 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3" asChild>
            <Link to="/admin">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/admin/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Contact Submissions</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {contacts.filter(c => c.status === "unread").length}
              </div>
              <p className="text-sm text-muted-foreground">Unread</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-600">
                {contacts.filter(c => c.status === "read").length}
              </div>
              <p className="text-sm text-muted-foreground">Pending Reply</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {contacts.filter(c => c.status === "replied").length}
              </div>
              <p className="text-sm text-muted-foreground">Replied</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id} className={contact.status === "unread" ? "bg-blue-50/50" : ""}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>{contact.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(contact.status)}`}>
                        {contact.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleView(contact)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleMarkReplied(contact.id)}
                        disabled={contact.status === "replied"}
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(contact.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* View Contact Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Details</DialogTitle>
              <DialogDescription>
                Received on {selectedContact?.date}
              </DialogDescription>
            </DialogHeader>
            {selectedContact && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{selectedContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p className="font-medium">{selectedContact.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{selectedContact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{selectedContact.phone}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Message</p>
                  <p className="bg-muted p-3 rounded-lg">{selectedContact.message}</p>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <a href={`mailto:${selectedContact.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Reply via Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      handleMarkReplied(selectedContact.id);
                      setIsDialogOpen(false);
                    }}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark Replied
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminContacts;
