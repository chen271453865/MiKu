<template>
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">MiKu</div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple">c</div></el-col>
        <el-col :span="6">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    13435663920<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>充值数：13435663920充值数</el-dropdown-item>
                    <el-dropdown-item>充值数：13435663920</el-dropdown-item>
                    <el-dropdown-item>充值数：13435663920</el-dropdown-item>
                    <el-dropdown-item disabled>充值数：13435663920</el-dropdown-item>
                    <el-dropdown-item divided>充值数：13435663920</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>