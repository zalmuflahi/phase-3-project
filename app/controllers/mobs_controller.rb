class MobsController < ApplicationController
  before_action :set_mob, only: [:show, :update, :destroy]

  # GET /mobs
  def index
    mobs = Mob.all
    render json: mobs
  end

  # GET /mobs/1
  def show
    render json: @mob
  end

  # POST /mobs
  def create
    @mob = Mob.new(mob_params)

    if @mob.save
      render json: @mob, status: :created, location: @mob
    else
      render json: @mob.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mobs/1
  def update
    if @mob.update(mob_params)
      render json: @mob
    else
      render json: @mob.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mobs/1
  # def destroy
  #   @mob.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mob
      @mob = Mob.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mob_params
      params.fetch(:mob, {})
    end
end
