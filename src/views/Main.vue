<template>
	<el-container>
        <el-header :height="'5vh'"></el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer :height="'5vh'"></el-footer>
    </el-container>
</template>


<script>

export default {
	name: "Main",
	components: {},
	data() {
		return {};
	},
	methods: {},
};

</script>
