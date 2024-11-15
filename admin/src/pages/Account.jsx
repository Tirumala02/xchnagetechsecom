import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export default function Account() {
    const [user, setUser] = useState({
      username: 'admin',
      email: 'admin@example.com',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
  
    const handleUpdateProfile = (e) => {
      e.preventDefault();
      setTimeout(() => {
        setIsEditing(false);
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
      }, 1000);
    };
  
    const handleChangePassword = (e) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match!' });
        return;
      }
      setTimeout(() => {
        setNewPassword('');
        setConfirmPassword('');
        setMessage({ type: 'success', text: 'Password changed successfully!' });
      }, 1000);
    };
  
    const handleLogout = () => {
      console.log('Logging out...');
    };
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Account Management</h2>
        
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Manage your account details here.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateProfile}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="w-12 h-12 text-gray-400" />
                  <div>
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            {isEditing ? (
              <div className="flex space-x-2">
                <Button onClick={handleUpdateProfile}>Save Changes</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </CardFooter>
        </Card>
  
        {/* Security Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your password and login settings.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit">Change Password</Button>
            </form>
          </CardContent>
        </Card>
  
        {/* Notification Section */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="mt-4"
          >
            <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
              <AlertTitle>{message.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          </motion.div>
        )}
  
        {/* Logout Button */}
        <div className="mt-8 bg-">
          <Button variant="primary" onClick={handleLogout}>
            <LogOut  className="mr-2 h-4 w-4 inline-block" /> Logout
          </Button>
        </div>
      </div>
    );
  }
  