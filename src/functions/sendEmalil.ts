export const sendMail = async (e: React.FormEvent<HTMLFormElement>, formData: any, selectedFile: File | null) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: formData.message,
        email: formData.email,
        phone: formData.phone,
        name: formData.name,
        file: selectedFile ? selectedFile : null,
      }),
    });
  };