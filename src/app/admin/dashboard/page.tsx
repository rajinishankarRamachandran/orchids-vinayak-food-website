"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, signOut } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Plus, Edit, Trash2, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Dish = {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
  spice_level: string
  is_vegetarian: boolean
  is_available: boolean
}

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
    fetchDishes()
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

  const fetchDishes = async () => {
    const { data, error } = await supabase
      .from("dishes")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setDishes(data)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/admin/login")
  }

  const deleteDish = async (id: string) => {
    if (!confirm("Are you sure you want to delete this dish?")) return

    const { error } = await supabase.from("dishes").delete().eq("id", id)

    if (!error) {
      setDishes(dishes.filter((d) => d.id !== id))
    }
  }

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("dishes")
      .update({ is_available: !currentStatus })
      .eq("id", id)

    if (!error) {
      setDishes(
        dishes.map((d) =>
          d.id === id ? { ...d, is_available: !currentStatus } : d
        )
      )
    }
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
        <Tabs defaultValue="dishes" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="dishes">Dishes</TabsTrigger>
            <TabsTrigger value="content">Site Content</TabsTrigger>
          </TabsList>

          <TabsContent value="dishes" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-charcoal">
                  Dishes Management
                </h2>
                <p className="text-muted-foreground mt-1">
                  Add, edit, or remove dishes from your menu
                </p>
              </div>
              <Button
                asChild
                className="bg-saffron hover:bg-saffron-dark"
              >
                <Link href="/admin/dashboard/add-dish">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Dish
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={dish.image_url}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="sm"
                        variant={dish.is_available ? "default" : "secondary"}
                        onClick={() =>
                          toggleAvailability(dish.id, dish.is_available)
                        }
                        className="text-xs"
                      >
                        {dish.is_available ? "Available" : "Unavailable"}
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{dish.name}</span>
                      <span className="text-saffron">${dish.price}</span>
                    </CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-cream px-2 py-1 rounded">
                        {dish.category}
                      </span>
                      <span className="text-xs bg-cream px-2 py-1 rounded">
                        {dish.spice_level}
                      </span>
                      {dish.is_vegetarian && (
                        <span className="text-xs bg-green/10 text-green px-2 py-1 rounded">
                          Veg
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <Link href={`/admin/dashboard/edit-dish/${dish.id}`}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => deleteDish(dish.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal">
                Website Content
              </h2>
              <p className="text-muted-foreground mt-1">
                Manage homepage sections, testimonials, and other content
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>
                  Content management features will be available here
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, signOut } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Plus, Edit, Trash2, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Dish = {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
  spice_level: string
  is_vegetarian: boolean
  is_available: boolean
}

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
    fetchDishes()
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

  const fetchDishes = async () => {
    const { data, error } = await supabase
      .from("dishes")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setDishes(data)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/admin/login")
  }

  const deleteDish = async (id: string) => {
    if (!confirm("Are you sure you want to delete this dish?")) return

    const { error } = await supabase.from("dishes").delete().eq("id", id)

    if (!error) {
      setDishes(dishes.filter((d) => d.id !== id))
    }
  }

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("dishes")
      .update({ is_available: !currentStatus })
      .eq("id", id)

    if (!error) {
      setDishes(
        dishes.map((d) =>
          d.id === id ? { ...d, is_available: !currentStatus } : d
        )
      )
    }
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
        <Tabs defaultValue="dishes" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="dishes">Dishes</TabsTrigger>
            <TabsTrigger value="content">Site Content</TabsTrigger>
          </TabsList>

          <TabsContent value="dishes" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-charcoal">
                  Dishes Management
                </h2>
                <p className="text-muted-foreground mt-1">
                  Add, edit, or remove dishes from your menu
                </p>
              </div>
              <Button
                asChild
                className="bg-saffron hover:bg-saffron-dark"
              >
                <Link href="/admin/dashboard/add-dish">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Dish
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={dish.image_url}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="sm"
                        variant={dish.is_available ? "default" : "secondary"}
                        onClick={() =>
                          toggleAvailability(dish.id, dish.is_available)
                        }
                        className="text-xs"
                      >
                        {dish.is_available ? "Available" : "Unavailable"}
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{dish.name}</span>
                      <span className="text-saffron">${dish.price}</span>
                    </CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-cream px-2 py-1 rounded">
                        {dish.category}
                      </span>
                      <span className="text-xs bg-cream px-2 py-1 rounded">
                        {dish.spice_level}
                      </span>
                      {dish.is_vegetarian && (
                        <span className="text-xs bg-green/10 text-green px-2 py-1 rounded">
                          Veg
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <Link href={`/admin/dashboard/edit-dish/${dish.id}`}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => deleteDish(dish.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}