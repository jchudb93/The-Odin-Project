class ArticlesController < ApplicationController
	def new
	end

	def create
		render plain: params[:articles].inspect
	end
end
