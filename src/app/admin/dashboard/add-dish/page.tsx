"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AddDishPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Chaat",
    image_url: "",
    spice_level: "Medium",
    is_vegetarian: true,
    is_available: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("dishes").insert([
      {
        ...formData,
        price: parseFloat(formData.price),
      },
    ])

    if (error) {
      alert("Error adding dish: " + error.message)
      setLoading(false)
      return
    }

    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Button asChild variant="ghost">
            <Link href="/admin/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-serif">Add New Dish</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Dish Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Chaat">Chaat</SelectItem>
                      <SelectItem value="Snacks">Snacks</SelectItem>
                      <SelectItem value="Drinks">Drinks</SelectItem>
                      <SelectItem value="Desserts">Desserts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="spice_level">Spice Level</Label>
                <Select
                  value={formData.spice_level}
                  onValueChange={(value) =>
                    setFormData({ ...formData, spice_level: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mild">Mild</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hot">Hot</SelectItem>
                    <SelectItem value="Extra Hot">Extra Hot</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="is_vegetarian">Vegetarian</Label>
                  <p className="text-sm text-muted-foreground">
                    Is this dish vegetarian?
                  </p>
                </div>
                <Switch
                  id="is_vegetarian"
                  checked={formData.is_vegetarian}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_vegetarian: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="is_available">Available</Label>
                  <p className="text-sm text-muted-foreground">
                    Is this dish currently available?
                  </p>
                </div>
                <Switch
                  id="is_available"
                  checked={formData.is_available}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_available: checked })
                  }
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-saffron hover:bg-saffron-dark"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Dish"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/dashboard")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
