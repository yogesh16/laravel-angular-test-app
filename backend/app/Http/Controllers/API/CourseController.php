<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseRequest;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $courses = Course::get();
        return response()->json($courses);
    }

    public function create(CourseRequest $request)
    {
        $data = $request->validated();

        Course::create($data);

        return response()->json(['status' => true, 'msg' => 'Course created']);
    }

    public function edit(Course $course, CourseRequest $request)
    {
        $data = $request->validated();

        $course->update($data);

        return response()->json(['status' => true, 'msg' => 'Course updated']);
    }

    public function delete(Course $course)
    {
        $course->delete();

        return response()->json(['status' => true, 'msg' => 'Course deleted']);
    }
}
