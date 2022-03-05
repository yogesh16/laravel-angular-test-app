<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentRequest;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $students = Student::with(['enrollment.course'])->get();
        return response()->json($students);
    }


    public function create(StudentRequest $request)
    {
        if(!$request->validated()){
            return response()->json(['status' => false, 'msg' => 'Invalid data']);
        }
        $data = $request->all();

        $student = Student::create($data);

        if(isset($request->courses))
            $student->syncCourses($request->courses);

        return response()->json(['status' => true, 'msg' => 'Student created']);
    }

    public function edit(Student $student, StudentRequest $request)
    {
        $data = $request->validated();

        $student->update($data);

        if(isset($request->courses))
            $student->syncCourses($request->courses);

        return response()->json(['status' => true, 'msg' => 'Student updated']);
    }

    public function delete(Student $student)
    {
        $student->delete();

        return response()->json(['status' => true, 'msg' => 'Student deleted']);
    }
}
