"use client";
import { useState } from "react";
import { Trash2, AlertTriangle, Shield, X } from "lucide-react";
import { deleteUser } from "@/actions/user.action";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

export default function DeleteUserSection() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      setIsDeleting(true);
      const response = await deleteUser();

      if (!response) {
        toast.error("Error deleting account. Please try again later.");
        setIsDeleting(false);
        return;
      }

      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
      });

      localStorage.clear();
      sessionStorage.clear();

      await signOut({ callbackUrl: "/" });

      toast.success("Account deleted successfully.");
      setShowConfirmation(false);
      setConfirmText("");
    } catch (err) {
      console.error("Error deleting account:", err);
      toast.error("Unexpected error during deletion.");
    } finally {
      setIsDeleting(false);
    }
  };

  const canDelete = confirmText === "DELETE";

  return (
    <div className="bg-red-950/20 border border-red-800/30 p-8 rounded-xl shadow-xl">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-full bg-red-600/20">
          <AlertTriangle className="h-6 w-6 text-red-400" />
        </div>
        <div>
          <h3 className="text-red-300 font-bold text-xl tracking-tight mb-2">
            Danger Zone
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>
      </div>

      {!showConfirmation ? (
        <div className="space-y-4">
          <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-red-400" />
              <span className="text-red-300 font-medium">
                What happens when you delete your account:
              </span>
            </div>
            <ul className="text-sm text-gray-300 space-y-1 ml-8">
              <li>• All your data will be permanently deleted</li>
              <li>• Your username will become available to others</li>
              <li>• You will be immediately logged out</li>
              <li>• This action cannot be undone</li>
            </ul>
          </div>

          <button
            onClick={() => setShowConfirmation(true)}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
          >
            <Trash2 className="h-4 w-4" />
            Delete Account
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-red-900/30 border border-red-800/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-red-300 font-semibold text-lg">
                Confirm Account Deletion
              </h4>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setConfirmText("");
                }}
                className="p-1 rounded-md hover:bg-red-800/30 transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              This will permanently delete your account and all associated data.
              This action is irreversible.
            </p>

            <div className="mb-4">
              <label
                htmlFor="confirmDelete"
                className="block text-sm font-medium text-red-300 mb-2"
              >
                Type{" "}
                <span className="font-bold bg-red-800/30 px-2 py-1 rounded">
                  DELETE
                </span>{" "}
                to confirm:
              </label>
              <input
                id="confirmDelete"
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                className="w-full bg-gray-800 border border-red-600/50 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Type DELETE to confirm"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDeleteAccount}
                disabled={!canDelete || isDeleting}
                className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
              >
                {isDeleting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />
                    Delete Account Permanently
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setConfirmText("");
                }}
                disabled={isDeleting}
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
