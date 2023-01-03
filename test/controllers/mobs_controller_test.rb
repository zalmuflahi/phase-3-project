require "test_helper"

class MobsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mob = mobs(:one)
  end

  test "should get index" do
    get mobs_url, as: :json
    assert_response :success
  end

  test "should create mob" do
    assert_difference('Mob.count') do
      post mobs_url, params: { mob: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show mob" do
    get mob_url(@mob), as: :json
    assert_response :success
  end

  test "should update mob" do
    patch mob_url(@mob), params: { mob: {  } }, as: :json
    assert_response 200
  end

  test "should destroy mob" do
    assert_difference('Mob.count', -1) do
      delete mob_url(@mob), as: :json
    end

    assert_response 204
  end
end
