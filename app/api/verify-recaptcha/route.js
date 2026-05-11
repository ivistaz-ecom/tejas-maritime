export async function POST(req) {
    try {
      const body = await req.json();
  
      const token = body.token;
  
      if (!token) {
        return Response.json(
          {
            success: false,
            error: "No token found",
          },
          { status: 400 }
        );
      }
  
      const secretKey =
        process.env.RECAPTCHA_SECRET_KEY;
  
      const googleResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: `secret=${secretKey}&response=${token}`,
        }
      );
  
      const data =
        await googleResponse.json();
  
      if (!data.success) {
        return Response.json(
          {
            success: false,
            error:
              "reCAPTCHA verification failed",
          },
          { status: 400 }
        );
      }
  
      return Response.json({
        success: true,
      });
    } catch (error) {
      return Response.json(
        {
          success: false,
          error: "Server error",
        },
        { status: 500 }
      );
    }
  }