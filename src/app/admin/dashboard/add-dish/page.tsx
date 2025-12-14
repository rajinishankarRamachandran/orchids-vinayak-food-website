"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AddDishPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [heading, setHeading] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    const filePath = `dishes/${fileName}`

    const { data, error } = await supabase.storage
      .from('dish-images')
      .upload(filePath, file)

    if (error) {
      alert('Error uploading file: ' + error.message)
      setUploading(false)
      return
    }

    const { data: urlData } = supabase.storage
      .from('dish-images')
      .getPublicUrl(filePath)

    setImageUrl(urlData.publicUrl)
    setUploading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("dishes").insert([
      {
        name: heading,
        description,
        image_url: imageUrl,
        tagline,
        price: 0,
        category: "Chaat",
        spice_level: "Medium",
        is_vegetarian: true,
        is_available: true,
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
      <header className="bg-white border-b border-cream-dark sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold text-charcoal">
              Add New Dish
            </h1>
            <Button asChild variant="outline">
              <Link href="/admin/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Dish Details</CardTitle>
            <CardDescription>
              Add the heading, description, and image for the new dish
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="heading">Heading</Label>
                <Input
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder="Pani Puri"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="Our Signature Dish Since 2000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Experience the perfect balance of flavors in every bite..."
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="/images/pani-puri.jpg"
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    type="button"
                  >
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {uploading ? "Uploading..." : "Enter the image URL or upload a new image"}
                </p>
              </div>

              {imageUrl && (
                <div className="space-y-2">
                  <Label>Image Preview</Label>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                    <Image
                      src={imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-saffron hover:bg-saffron-dark"
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