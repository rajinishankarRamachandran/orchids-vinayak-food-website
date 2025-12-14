"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, signOut } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Edit, Home } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { user, error } = await getCurrentUser()
    if (!user || error) {
      router.push("/admin/login")
      return
    }
    setUser(user)
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-cream-dark sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold text-charcoal">
              Admin Dashboard
            </h1>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  View Site
                </Link>
              </Button>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-serif font-bold text-charcoal">
              Website Content
            </h2>
            <p className="text-muted-foreground mt-1">
              Manage homepage sections, menu page, and other content
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Menu Page Content</CardTitle>
              <CardDescription>
                Edit the heading, description, and image for the menu page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="bg-saffron hover:bg-saffron-dark">
                <Link href="/admin/dashboard/menu-content">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Menu Page
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}