"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmail } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat } from "lucide-react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const { data, error } = await signInWithEmail(email, password)

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    if (data.user) {
      router.push("/admin/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-cream-dark p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-saffron/10 flex items-center justify-center">
            <ChefHat className="w-8 h-8 text-saffron" />
          </div>
          <CardTitle className="text-3xl font-serif">Admin Login</CardTitle>
          <CardDescription>Sign in to manage your restaurant</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@vinayakfood.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-saffron hover:bg-saffron-dark"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
