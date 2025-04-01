import { userService } from "@/app/lib/api/services/userServices";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const page = searchParams.get("page");
//     const limit = searchParams.get("limit");

//     const users = await userService.getUsers({
//       page: page ? parseInt(page) : 1,
//       limit: limit ? parseInt(limit) : 10,
//     });

//     return NextResponse.json(users);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch users" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await userService.createUser(body);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
