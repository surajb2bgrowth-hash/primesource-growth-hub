import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  FolderOpen,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: FileText, label: "Blog Posts", path: "/admin/blogs" },
    { icon: Briefcase, label: "Services", path: "/admin/services" },
    { icon: FolderOpen, label: "Case Studies", path: "/admin/case-studies" },
    { icon: MessageSquare, label: "Contact Submissions", path: "/admin/contacts" },
  ];

  const stats = [
    { label: "Blog Posts", value: "12", change: "+2 this week" },
    { label: "Services", value: "6", change: "Active" },
    { label: "Case Studies", value: "8", change: "+1 this month" },
    { label: "Contact Messages", value: "24", change: "5 unread" },
  ];

  const handleLogout = () => {
    // TODO: Clear auth token from Hostinger API
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-card border-r transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">Admin Panel</span>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 p-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-2 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your website content</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/blogs">
                <FileText className="h-4 w-4" />
                Manage Blog Posts
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/services">
                <Briefcase className="h-4 w-4" />
                Manage Services
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/case-studies">
                <FolderOpen className="h-4 w-4" />
                Manage Case Studies
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/contacts">
                <MessageSquare className="h-4 w-4" />
                View Contact Messages
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">🔧 Hostinger API Integration</h3>
          <p className="text-sm text-muted-foreground">
            This admin panel uses mock data. To connect to your Hostinger backend:
          </p>
          <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
            <li>Create REST API endpoints on your Hostinger server</li>
            <li>Update the API calls in each admin component</li>
            <li>Set up MySQL database tables for each content type</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
