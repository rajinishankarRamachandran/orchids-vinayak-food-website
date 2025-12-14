"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Upload } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type MenuContent = {
  id: string
  heading: string
  tagline: string
  description: string
  image_url: string
}

export default function MenuContentPage() {
  const [user, setUser] = useState<any>(null)
  const [content, setContent] = useState<MenuContent | null>(null)
  const [heading, setHeading] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    checkUser()
    fetchContent()
  }, [])

  const checkUser = async () => {
    const { user, error } = await getCurrentUser()
    if (!user || error) {
      router.push("/admin/login")
      return
    }
    setUser(user)
  }

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("menu_content")
      .select("*")
      .single()

    if (!error && data) {
      setContent(data)
      setHeading(data.heading)
      setTagline(data.tagline)
      setDescription(data.description)
      setImageUrl(data.image_url)
    }
    setLoading(false)
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    const filePath = `menu/${fileName}`

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

  const handleSave = async () => {
    setSaving(true)
    
    const updates = {
      heading,
      tagline,
      description,
      image_url: imageUrl,
      updated_at: new Date().toISOString()
    }

    if (content?.id) {
      const { error } = await supabase
        .from("menu_content")
        .update(updates)
        .eq("id", content.id)

      if (!error) {
        alert("Content updated successfully!")
        fetchContent()
      } else {
        alert("Error updating content: " + error.message)
      }
    }

    setSaving(false)
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
              Edit Menu Page Content
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
            <CardTitle>Menu Page Hero Section</CardTitle>
            <CardDescription>
              Edit the heading, description, and image for the menu page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="heading">Heading</Label>
              <Input
                id="heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="Pani Puri"
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
                placeholder="Experience the perfect balance of flavors..."
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
                onClick={handleSave}
                disabled={saving}
                className="bg-saffron hover:bg-saffron-dark"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button asChild variant="outline">
                <Link href="/menu" target="_blank">
                  Preview Menu Page
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}