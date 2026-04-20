import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { ProjectMember } from "../models/projectmember.models. js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";

const getProjects = asyncHandler(async (req, res) => {
  //test
});

const getProjectById = asyncHandler(async (req, res) => {
    //test
});

const createProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body;

    await Project.create({
        name,
        description,
        createdBy: new mongoose.Types.ObjectId(req.user._id)
    });

    await ProjectMember.create({
        user: new mongoose.Types.ObjectId(req.user._id),
        project: new mongoose.Types.ObjectId(project._id),
        role:UserRoles.ADMIN
    });

    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            project,
            "Project created successfully"
        )
    );
});


const updateProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const { projectId } = req.params;
    
    const updatedProject = await Project.findByIdAndUpdate(
        projectId,
        {
            name,
            description
        },
        { new: true }
    );

    if (!updatedProject) {
        throw new ApiError(404, "Project not found");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            updatedProject,
            "Project updated successfully"
        )
    );
});

const deleteProject = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) {
        throw new ApiError(404, "Project not found");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            deletedProject,
            "Project deleted successfully"
        )
    );
});

const addMemberToProject = asyncHandler(async (req, res) => {
    //test
});

const removeMemberFromProject = asyncHandler(async (req, res) => {
    //test
}   );

const getProjectMembers = asyncHandler(async (req, res) => {
    //test
});

export {getProjects,
    getProjectById,
    createProject,  
    updateProject,
    deleteProject,
    addMemberToProject,
    removeMemberFromProject,
    getProjectMembers
};